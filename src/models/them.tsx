import { atom, useAtom } from 'jotai';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors } from '@src/constants/Colors';
import { useColorScheme } from 'react-native';

// 主题模式类型
export type ThemeMode = 'light' | 'dark' | 'system';

// 定义主题原子状态
export const themeModeAtom = atom<ThemeMode>('system');

// 创建一个持久化的原子状态
export const persistentThemeModeAtom = atom(
  // 读取器
  (get) => get(themeModeAtom),
  // 写入器
  async (get, set, newValue: ThemeMode) => {
    set(themeModeAtom, newValue);
    await AsyncStorage.setItem('themeMode', newValue);
  }
);

// 初始化主题函数
export const initializeTheme = async () => {
  try {
    const savedTheme = await AsyncStorage.getItem('themeMode');
    if (savedTheme !== null) {
      return savedTheme as ThemeMode;
    }
    return 'system' as ThemeMode; // 默认跟随系统
  } catch (error) {
    console.error('加载主题设置失败:', error);
    return 'system' as ThemeMode;
  }
};

// 自定义Hook：使用主题
export function useTheme() {
  const [themeMode, setThemeMode] = useAtom(persistentThemeModeAtom);
  const systemColorScheme = useColorScheme();

  // 根据主题模式判断是否为深色模式
  const isDarkMode = themeMode === 'system' 
    ? systemColorScheme === 'dark'
    : themeMode === 'dark';

  // 获取当前主题的颜色
  const colors = {
    background: isDarkMode ? Colors.dark.background : Colors.light.background,
    text: isDarkMode ? Colors.dark.text : Colors.light.text,
    border: isDarkMode ? '#333' : '#eee',
    tint: isDarkMode ? Colors.dark.tint : Colors.light.tint,
  };

  // 切换主题的函数
  const setTheme = (mode: ThemeMode) => {
    setThemeMode(mode);
  };

  return {
    themeMode,
    isDarkMode,
    setTheme,
    colors,
    systemColorScheme,
  };
}
