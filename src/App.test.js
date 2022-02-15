import { render, screen } from '@testing-library/react';
import App from './App';

describe('[TEST] Component App',()=>{
    it('Find word "reload" in the component',()=>{

      const textToFind = 'reload.'

      render(<App/>);


      expect(screen.getByText(textToFind,{exact:false})).toBeInTheDocument()
})
})