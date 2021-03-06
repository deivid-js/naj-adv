import styled from 'styled-components/native';

import {fonts} from '~/config/styles';

export const Container = styled.View`
  background: #eee;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 16px;
  font-family: '${fonts.regular}';
`;

export const Button = styled.TouchableOpacity`
  padding: 15px;
`;

export const ButtonText = styled.Text``;

export const Modal = styled.Modal``;

export const Wrapper = styled.View`
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const WrapperContent = styled.View`
  background: #fff;
  padding: 15px 30px;
  border-radius: 10px;
  position: absolute;
`;

export const WrapperText = styled.Text`
  font-family: ${fonts.regular};
`;
