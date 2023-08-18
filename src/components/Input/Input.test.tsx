import Input, { Input_prop_types } from './Input';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Tests for Input component', () => {
  test('If value rendered correctly', () => {
    const InputProps: Input_prop_types = {
      value: 'value',
      type: 'text',
      label: 'label'
    };

    render(<Input {...InputProps} />);
    const element = screen.getByTestId('input-test');

    expect(element.getAttribute('value')).toBe('value');
  });

  test('If type rendered correctly', () => {
    const InputProps: Input_prop_types = {
      value: 'value',
      type: 'text',
      label: 'label'
    };

    render(<Input {...InputProps} />);
    const element = screen.getByTestId('input-test');

    expect(element.getAttribute('type')).toBe('text');
  });

  test('If onClick works properly', () => {
    const onChange = jest.fn();
    const InputProps: Input_prop_types = {
      value: 'value',
      type: 'text',
      label: 'label',
      onchangefunc: onChange
    };

    render(<Input {...InputProps} />);
    const element = screen.getByTestId('input-test');

    fireEvent.change(element, { target: { value: 'a' } });

    expect(onChange).toBeCalled();
  });
});
