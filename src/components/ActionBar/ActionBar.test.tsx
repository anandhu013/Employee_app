import ActionBar, { Action_prop_types } from './ActionBar';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Tests for ActionBar component', () => {
  test('If onDelete works properly', () => {
    const onDelete = jest.fn();
    const ActionProps: Action_prop_types = {
      onclickDelete: onDelete
    };

    render(<ActionBar {...ActionProps} />);
    const element = screen.getByTestId('deletebutton-test');

    fireEvent.click(element);

    expect(onDelete).toBeCalled();
  });

  test('If onEdit works properly', () => {
    const onEdit = jest.fn();
    const ActionProps: Action_prop_types = {
      onclickEdit: onEdit
    };

    render(<ActionBar {...ActionProps} />);
    const element = screen.getByTestId('editbutton-test');

    fireEvent.click(element);

    expect(onEdit).toBeCalled();
  });
});
