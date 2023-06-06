import { Text, TouchableOpacity, View } from "react-native";

import type { CustomButtonProps } from "../../interfaces";

export default function Button({
  children,
  icon,
  title,
  loading,
  disabled,
  onPress,
  ...props
}: CustomButtonProps) {
  function handlePress() {
    if (disabled) return;
    onPress();
  }

  return (
    <View className="flex-row">
      <TouchableOpacity
        className={`flex h-14 w-full flex-row items-center justify-center rounded-md ${
          disabled ? "bg-input_Gray" : "bg-dark_Blue"
        }`}
        onPress={handlePress}
        activeOpacity={disabled ? 0.8 : 0.2}
        {...props}
      >
        {loading && (
          <>
            <Text className="text-center text-xl text-white">Loading...</Text>
          </>
        )}
        {!loading && (
          <>
            {icon && <View className="mr-1.5">{icon}</View>}
            {title && <Text className="text-center text-xl text-white">{children || title}</Text>}
          </>
        )}
      </TouchableOpacity>
    </View>
  );
}
