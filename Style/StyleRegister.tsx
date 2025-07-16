import { StyleSheet } from "react-native";

const StyleRegister = StyleSheet.create({
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
    backgroundColor: '#f9f9f9',
  },
   toggleText: {
  color: '#007BFF',
  paddingHorizontal: 10,
  alignSelf: 'center',
},  
  input: { flex: 1, padding: 12 },
  createButton: {
    backgroundColor: '#5C4DB1',
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: { color: '#fff', fontWeight: '600' },
  orText: { textAlign: 'center', marginVertical: 12, color: '#999' },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 12,
    borderRadius: 30,
    marginBottom: 12,
  },

loginRedirect: {
  marginTop: 24,
  alignItems: 'center',
},

loginRedirectText: {
  fontSize: 14,
  color: '#1D1D1D',
},

loginRedirectLink: {
  color: '#5C4DB1',
  fontWeight: '600',
},

  icon: { width: 24, height: 24, marginRight: 12 },
  socialText: { fontSize: 16 },
});


export default StyleRegister;