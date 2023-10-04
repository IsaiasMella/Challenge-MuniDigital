import { render, fireEvent } from '@testing-library/react';
import { NavBar } from '../../../../Components/NavBar/NavBar';

describe('<NavBar/>', () => {
  it('debe coincidir con el snapshot', () => {
    const { asFragment } = render(<NavBar handleChange={jest.fn()} handleModale={jest.fn()} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('debe llamar a handleChange cuando se cambia el valor del input y select', () => {
    const handleChange = jest.fn();
    const { getByPlaceholderText, getByText } = render(<NavBar handleChange={handleChange} handleModale={jest.fn()} />);

    fireEvent.change(getByPlaceholderText('Buscar'), { target: { value: 'test' } });
    expect(handleChange).toHaveBeenCalled();

    fireEvent.change(getByText('Todas').parentNode, { target: { value: 'hacer' } });
    expect(handleChange).toHaveBeenCalledTimes(2);
  });

  it('debe llamar a handleModale cuando se hace clic en el botón', () => {
    const handleModale = jest.fn();
    const { getByText } = render(<NavBar handleChange={jest.fn()} handleModale={handleModale} />);

    fireEvent.click(getByText('+ Nueva tarea'));
    expect(handleModale).toHaveBeenCalled();
  });
});
