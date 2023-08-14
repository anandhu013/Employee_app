import Button, { Button_prop_types } from './Button';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Tests for Button component', () => {
  test('If label rendered correctly', () => {
    const ButtonProps: Button_prop_types = {
      value: 'Button',
      type: 'button'
    };

    render(<Button {...ButtonProps} />);
    const element = screen.getByTestId('button-test');

    expect(element.getAttribute('value')).toBe('Button');
  });

  test('If type rendered correctly', () => {
    const ButtonProps: Button_prop_types = {
      value: 'Button',
      type: 'button'
    };

    render(<Button {...ButtonProps} />);
    const element = screen.getByTestId('button-test');

    expect(element.getAttribute('type')).toBe('button');
  });

  test('If onClick works properly', () => {
    const onClick = jest.fn();
    const ButtonProps: Button_prop_types = {
      value: 'Button',
      type: 'button',
      onclickfunc: onClick
    };

    render(<Button {...ButtonProps} />);
    const element = screen.getByTestId('button-test');

    fireEvent.click(element);

    expect(onClick).toBeCalled();
  });

  test('If Snapshot is  correct', () => {
    const ButtonProps: Button_prop_types = {
      value: 'Button',
      type: 'button'
    };

    //render(<Button {...ButtonProps} />);
    //const element = screen.getByTestId('button-test');
    const element = render(<Button {...ButtonProps} />);

    expect(element).toMatchSnapshot();
  });
});
