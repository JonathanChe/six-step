import React from 'react';
import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';
import { connect } from 'react-redux';

import List from './List';
import ActionButton from './ActionButton';

const ListContainer = styled.div`
  display: flex;
  margin-right: 8;
`;

const Title = styled.h1`
  color: #a5a4a2;
  text-align: center;
  font-size: 2.5rem;
`;

const MainContainerStyles = styled.main`
  margin: 1%;
`;

const mapStateToProps = state => ({
  lists: state.lists,
});

const onDragEnd = () => {};

export const Main = ({ lists }) => (
  <DragDropContext onDragEnd={onDragEnd}>
    <MainContainerStyles>
      <Title>Six Step</Title>
      <ListContainer>
        {lists.map(list => (
          <List
            listId={list.id}
            key={list.id}
            title={list.title}
            cards={list.cards}
          />)
        )}
        <ActionButton list />
      </ListContainer>
    </MainContainerStyles>
  </DragDropContext>
)

export default connect(mapStateToProps)(Main);
