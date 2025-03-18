import { atom, useAtom } from 'jotai';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors } from '@src/constants/Colors';
import { useColorScheme } from 'react-native';

// 主题模式类型
export type ThemeMode = 'light' | 'dark' | 'system';

// 定义主题原子状态
const themeModeAtom = atom<ThemeMode>('system');



// 自定义Hook：使用主题
export function useTheme() {
  const [themeMode, setThemeMode] = useAtom(themeModeAtom);
  const systemColorScheme = useColorScheme();

  // 根据主题模式判断是否为深色模式
  const isDarkMode = themeMode === 'system'
    ? systemColorScheme === 'dark'
    : themeMode === 'dark';

  // 获取当前主题的颜色
  const colors = {
    background: isDarkMode ? Colors.dark.background : Colors.light.background,
    background2: isDarkMode ? Colors.dark.background2 : Colors.light.background2,
    text: isDarkMode ? Colors.dark.text : Colors.light.text,
    border: isDarkMode ? '#333' : '#eee',
    tint: isDarkMode ? Colors.dark.tint : Colors.light.tint,
  };

  // 切换主题的函数
  const setTheme = (mode: ThemeMode) => {
    AsyncStorage.setItem('themeMode', mode)
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
