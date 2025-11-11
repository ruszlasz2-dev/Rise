import React, { useState } from 'react';
import { Modal, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import styled from 'styled-components/native';

interface QuestCompletionModalProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: (reflection?: string) => void;
}

export function QuestCompletionModal({ visible, onClose, onSubmit }: QuestCompletionModalProps) {
  const [reflection, setReflection] = useState('');

  const handleSubmit = () => {
    onSubmit(reflection.trim() || undefined);
    setReflection('');
  };

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <Overlay>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1, justifyContent: 'flex-end' }}
        >
          <ModalContent>
            <ModalHeader>
              <ModalTitle>Complete Quest</ModalTitle>
              <CloseButton onPress={onClose}>
                <CloseText>✕</CloseText>
              </CloseButton>
            </ModalHeader>

            <ModalBody>
              <Label>Reflection (Optional)</Label>
              <ReflectionInput
                placeholder="How did this quest help you grow?"
                value={reflection}
                onChangeText={setReflection}
                multiline
                numberOfLines={4}
                textAlignVertical="top"
              />
              <HintText>Share your experience to earn bonus XP</HintText>
            </ModalBody>

            <ModalFooter>
              <CancelButton onPress={onClose}>
                <CancelText>Cancel</CancelText>
              </CancelButton>
              <SubmitButton onPress={handleSubmit}>
                <SubmitText>Complete</SubmitText>
              </SubmitButton>
            </ModalFooter>
          </ModalContent>
        </KeyboardAvoidingView>
      </Overlay>
    </Modal>
  );
}

const Overlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: flex-end;
`;

const ModalContent = styled.View`
  background-color: #ffffff;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  padding: 24px;
  max-height: 80%;
`;

const ModalHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const ModalTitle = styled.Text`
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
`;

const CloseButton = styled(TouchableOpacity)`
  width: 32px;
  height: 32px;
  justify-content: center;
  align-items: center;
`;

const CloseText = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.5;
`;

const ModalBody = styled.View`
  margin-bottom: 24px;
`;

const Label = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 8px;
`;

const ReflectionInput = styled.TextInput`
  background-color: #f7f7fb;
  border-radius: 12px;
  padding: 16px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
  min-height: 120px;
  border: 1px solid #e0e0e0;
`;

const HintText = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.5;
  margin-top: 8px;
`;

const ModalFooter = styled.View`
  flex-direction: row;
  gap: 12px;
`;

const CancelButton = styled(TouchableOpacity)`
  flex: 1;
  padding: 16px;
  background-color: #f7f7fb;
  border-radius: 12px;
  align-items: center;
`;

const CancelText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const SubmitButton = styled(TouchableOpacity)`
  flex: 1;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.accent};
  border-radius: 12px;
  align-items: center;
`;

const SubmitText = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
`;



