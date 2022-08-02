import { StyleSheet } from 'react-native';
import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  title: {
    fontSize: 20, 
    color: theme.colors.text_primary,
    fontFamily: theme.fonts.medium,
    marginBottom: 24
  },
  image: {
    width: 36,
    height: 36,
    marginRight: 8,
    marginTop: 42,
    marginBottom: 10
  },
  button: {
    height: 40, 
    backgroundColor: theme.colors.surface_secondary,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    marginBottom: 40
  },
  buttonTitle: {
    fontSize: 14,
    color: theme.colors.text_primary,
    fontFamily: theme.fonts.medium
  }
});