import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import TextareaAutosize from 'react-textarea-autosize';
import { Button } from '@material-ui/core';
import * as actions from '../actions/index';

const FormButtonGroupStyles = styled.div`
  margin-top: 8;
  display: flex;
  align-items: center;
`;

const mapDispatchToProps = dispatch => ({
  handleAddList: title => title && dispatch(actions.addList(title)),
  handleAddCard: (text, id) => text && id && dispatch(actions.addCard(text, id)),
});

// component
//TODO: Look into styling the background of the text-area
export const ActionButton = ({
  list,
  handleAddList,
  handleAddCard,
  listId,
}) => {
  // state
  const [formOpen, toggleForm] = useState(false);
  const [text, setText] = useState('');

  // methods
  const handleChange = e => setText(e.target.value);

  const renderForm = () => {
    const placeholder = list ? 'Enter list title' : 'Enter a title for this card';
    const buttonTitle = list ? 'Add List' : 'Add Card';

    return (
      <div>
        <Card style={{
          overflow: 'visible',
          minHeight: 80,
          minWidth: 272,
          padding: '6px 8px 2px'
        }}>
          <TextareaAutosize
            placeholder={placeholder}
            autoFocus
            onBlur={() => toggleForm(false)}
            value={text}
            onChange={handleChange}
            style={{
              resize: 'none',
              width: '100%',
              overflow: 'hidden',
              outline: 'none',
              border: 'none',
              fontSize: '1.25rem',
            }}
          />
        </Card>
        <FormButtonGroupStyles>
          <Button
            onMouseDown={() => {
              if (list) {
                handleAddList(text);
                setText('');
              } else {
                handleAddCard(text, listId);
                setText('');
              }
            }}
            variant='contained'
            style={{
              color: 'white',
              backgroundColor: '#538446',
            }}
          >
            {buttonTitle}
          </Button>
          <Icon
            style={{
              marginLeft: 8,
              cursor: 'pointer'
            }}
          >
            close
          </Icon>
        </FormButtonGroupStyles>
      </div>
    )
  };

  const renderAddButton = () => {
    const buttonText = list ? 'Add another list' : 'Add another card';

    return (
      <div>
        <Button
          onClick={() => toggleForm(true)}
          variant='contained'
          style={{
            color: 'white',
            backgroundColor: '#538446',
          }}
        >
          <Icon>add</Icon>
          <p>{buttonText}</p>
        </Button>
      </div>
    );
  };

  // component's return
  return formOpen ? renderForm() : renderAddButton();
};

export default connect(null, mapDispatchToProps)(ActionButton);
