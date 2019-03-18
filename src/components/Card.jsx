import React from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Draggable } from 'react-beautiful-dnd';

const styles = {
  cardContainer: {
    marginBottom: 8,
  }
};

const TrelloCard = ({ text, id, index }) => (
  <Draggable draggableId={String(id)} index={index}>
    {provided => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <Card style={styles.cardContainer}>
          <CardContent>
            <Typography gutterBottom>
              {text}
            </Typography>
          </CardContent>
        </Card>
      </div>
    )}
  </Draggable>
);

export default TrelloCard;
