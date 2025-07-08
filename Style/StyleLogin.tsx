import { StyleSheet } from "react-native";

const StyleLogin = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1D1D1D',
    marginTop: 30,
  },
  subtitle: {
    fontSize: 14,
    color: '#9E9E9E',
    marginBottom: 30,
  },

  label: {
    fontSize: 14,
    color: '#1D1D1D',
    marginBottom: 8,
    fontWeight: '600',
  },

  inputContainer: {
    backgroundColor: '#F9F9F9',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: '#eee',
    marginBottom: 16,
  },

  input: {
    fontSize: 14,
    color: '#000',
    padding: 0,
  },

  forgotContainer: {
    alignItems: 'flex-end',
    marginBottom: 16,
  },

  forgotText: {
    color: '#5C4DB1',
    fontSize: 13,
  },

  signInButton: {
    backgroundColor: '#5C4DB1',
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 24,
  },

  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },

  orText: {
    color: '#9E9E9E',
    textAlign: 'center',
    fontSize: 13,
    marginBottom: 16,
  },

  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 30,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    alignSelf: 'center',
    width: '100%',
  },

  icon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },

  socialText: {
    fontSize: 16,
    color: '#1D1D1D',
  },

  backToOnboarding: {
    marginTop: 24,
    textAlign: 'center',
    color: '#5C4DB1',
    fontWeight: '500',
    fontSize: 14,
    alignSelf: 'center',
  },
});

export default StyleLogin;
