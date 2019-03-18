import React, { useState } from 'react';
import { connect } from 'react-redux';
import Icon from '@material-ui/core/Icon';
import Card from '@material-ui/core/Card';
import TextareaAutosize from 'react-textarea-autosize';
import { Button } from '@material-ui/core';
import * as actions from '../actions/index';

const styles = {
  openForButtonGroup: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 3,
    height: 36,
    width: 272,
    paddingLeft: 10,
  },
  formButtonGroup: {
    marginTop: 8,
    display: 'flex',
    alignItems: 'center',
  },
};

const mapDispatchToProps = dispatch => ({
  handleAddList: title => title && dispatch(actions.addList(title)),
  handleAddCard: (text, id) => title && id && dispatch(actions.addCard(text, id)),
});

// component
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
            }}
          />
        </Card>
        <div style={styles.formButtonGroup}>
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
              backgroundColor: '#5aac44',
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
        </div>
      </div>
    )
  };

  const renderAddButton = () => {
    const buttonText = list ? 'Add another list' : 'Add another card';
    const buttonTextOpacity = list ? 1 : 0.5;
    const buttonTextColor = list ? 'white' : 'inherit';
    const buttonTextBackground = list ? 'rgba(0, 0, 0, .15)' : 'inherit';

    return (
      <div
        onClick={() => toggleForm(true)}
        style={{
          ...styles.openForButtonGroup,
          opacity: buttonTextOpacity,
          color: buttonTextColor,
          backgroundColor: buttonTextBackground,
        }}
      >
        <Icon>add</Icon>
        <p>{buttonText}</p>
      </div>
    )
  };

  // component's return
  return formOpen ? renderForm() : renderAddButton();
};

export default connect(null, mapDispatchToProps)(ActionButton);
