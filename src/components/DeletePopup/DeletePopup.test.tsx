import DeletePopup, { DeletePopup_prop_types } from './DeletePopup';
import { render, screen } from '@testing-library/react';

describe('Tests for DeletePopup component', () => {
  test('If onDelete works properly', () => {
    const DeletePopupProps: DeletePopup_prop_types = {
      value: 12
    };

    render(<DeletePopup {...DeletePopupProps} />);
    const element = screen.getByTestId('popup-para');

    expect(element.innerHTML).toBe('You want to delete employee 12');
  });
});
