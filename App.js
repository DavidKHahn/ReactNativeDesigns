import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import styled from 'styled-components';

export default function App() {
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <RecipeBackground source={require("./assets/main.png")}>
        <SafeAreaView>
          <MenuBar>
            <Back>
              <AntDesign name="arrowleft" size={24} color="yellow" />
              <Text style={{ marginLeft: 10, color: 'black'}}>Ingredients</Text>
            </Back>
            <AntDesign name="heart" size={24} color="red" />
          </MenuBar>
          <MainRecipe>
            <Text title heavy>Spicy Shrimp</Text>
            <Divider/>
            <Text bold>80 calories per 100g</Text>
            <Text>3g fat | 10g protein | 8g carbs</Text>
          </MainRecipe>
        </SafeAreaView>
      </RecipeBackground>
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  background-color: #FFF;
`;

const Text = styled.Text`
  color: ${((props) => props.dark ? "#000" : "#FFF")};
  font-family: "AvenirNext-Regular";

  ${({ title, large, small}) => {
    switch(true){
      case title:
        return `font-size: 32px`;
      case large:
        return `font-size: 20px`;
      case small:
        return `font-size: 13px`;
    }
  }}

  ${({ bold, heavy}) => {
    switch(true) {
      case bold:
        return `font-weight: 600`;
      case heavy:
        return `font-weight: 700`;
    }
  }}
`;

const RecipeBackground = styled.ImageBackground`
  width: 100%;
`;

const MenuBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
`;

const Back = styled.View`
  flex-direction: row;
  align-items: center;
`

const MainRecipe = styled.View`
  padding: 0 32px;
  margin: 200px 0 32px 0;
`;

const Divider = styled.View`
  border-bottom-color: #FFF;
  border-bottom-width: 2px;
  width: 150px;
  margin: 8px 0;
`;