import { StyleSheet } from 'react-native';

const StyleLogin = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginTop: 30 },
  subtitle: { color: '#999', marginBottom: 30 },
  label: { marginTop: 10, marginBottom: 4, fontWeight: '600' },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#eee',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: '#f9f9f9',
    marginBottom: 16,
  },

  input: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 8,
    fontSize: 16,
  },

  eyeIcon: {
    paddingHorizontal: 8,
  },

  forgotContainer: {
    alignItems: 'flex-end',
    marginBottom: 12,
  },

  forgotText: {
    color: '#5C4DB1',
    fontWeight: '500',
  },

  signInButton: {
    backgroundColor: '#5C4DB1',
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },

  orText: {
    textAlign: 'center',
    marginVertical: 12,
    color: '#999',
  },

  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    borderRadius: 30,
    marginBottom: 12,
  },

  icon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },

  socialText: {
    fontSize: 16,
  },

  backToOnboarding: {
    marginTop: 24,
    textAlign: 'center',
    color: '#5C4DB1',
    fontWeight: '600',
  },

});

export default StyleLogin;
