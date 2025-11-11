import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '../context/AuthContext';
import { useNavigation } from '@react-navigation/native';

export function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigation = useNavigation();

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);
    setError('');

    try {
      await login(email, password);
      // Navigation will happen automatically via auth state change
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <Content>
          <Header>
            <Title>Welcome Back</Title>
            <Subtitle>Sign in to continue your journey</Subtitle>
          </Header>

          <Form>
            <Input
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
            />
            <Input
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              autoCapitalize="none"
            />

            {error ? <ErrorText>{error}</ErrorText> : null}

            <LoginButton onPress={handleLogin} disabled={loading}>
              <LoginButtonText>{loading ? 'Signing in...' : 'Sign In'}</LoginButtonText>
            </LoginButton>

            <RegisterLink onPress={() => navigation.navigate('Register' as never)}>
              <RegisterLinkText>Don't have an account? Sign up</RegisterLinkText>
            </RegisterLink>
          </Form>
        </Content>
      </KeyboardAvoidingView>
    </Container>
  );
}

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Content = styled.View`
  flex: 1;
  justify-content: center;
  padding: 24px;
`;

const Header = styled.View`
  margin-bottom: 40px;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 32px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 8px;
`;

const Subtitle = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.6;
`;

const Form = styled.View`
  gap: 16px;
`;

const Input = styled.TextInput`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 16px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid #e0e0e0;
`;

const ErrorText = styled.Text`
  color: ${({ theme }) => theme.colors.error};
  font-size: 14px;
  text-align: center;
`;

const LoginButton = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: 12px;
  padding: 16px;
  align-items: center;
  margin-top: 8px;
`;

const LoginButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
`;

const RegisterLink = styled(TouchableOpacity)`
  margin-top: 16px;
  align-items: center;
`;

const RegisterLinkText = styled.Text`
  color: ${({ theme }) => theme.colors.accent};
  font-size: 14px;
`;



