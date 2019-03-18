import React from 'react';
import TrelloCard from './Card';
import ActionButton from './ActionButton';
import { Droppable } from 'react-beautiful-dnd';

const styles = {
  container: {
    backgroundColor: '#dfe3e6',
    borderRadius: 3,
    width: 300,
    padding: 8,
    height: '100%',
    marginRight: 8,
  }
};

const TrelloList = ({ title, cards, listId }) => (
  <Droppable droppableId={String(listId)}>
    {provided => (
      <div
        {...provided.droppableProps}
        ref={provided.innerRef}
        style={styles.container}
      >
        <h3>{title}</h3>
        {cards.map((card, idx) => (
          <TrelloCard
            key={card.id}
            text={card.text}
            id={card.id}
            index={idx}
          />
        ))}
        <ActionButton listId={listId} />
        {provided.placeholder}
      </div>
    )}
  </Droppable>
);

export default TrelloList;
