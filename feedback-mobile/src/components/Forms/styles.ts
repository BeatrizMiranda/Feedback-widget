import { StyleSheet } from 'react-native';
import { theme } from '../../theme';
import { getBottomSpace } from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    alignItems: 'center'
  },
  header: {
    flexDirection: 'row',
    marginVertical: 16
  },
  titleContainer: {
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 24
  },
  title: {
    fontSize: 20, 
    color: theme.colors.text_primary,
    fontFamily: theme.fonts.medium
  },
  errorText: {
    fontSize: 14, 
    color: theme.colors.errorRed,
    fontFamily: theme.fonts.medium
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 8
  },
  input: {
    height: 112, 
    padding: 12, 
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: theme.colors.stroke,
    color: theme.colors.text_primary,
    fontFamily: theme.fonts.regular
  },
  footer: {   
    flexDirection: 'row',
    marginBottom: 16
  }
});