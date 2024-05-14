export interface FormInputProps {
  label?: string;
  name?: string;
  defaultValue?: any;
  placeholder?: string;
  onChangeText?: (text: string) => void;
  value?: any;
  marginTop?: number;
  filterText?: (text: string) => string;
  borderColor?: string;
  type?: string;
  height?: number;
  width?: number;
  keyboardType?: string;
  autoCapitalize?: string;
  isMultiline?: boolean;
  }
  