import { render, screen } from '@testing-library/react';
import SayMyName from './SayMyName';


describe('[TEST] Component SayMyName',()=>{
    it('Find word "sergio" in the component',()=>{

      const textToFind = 'sergio'

      render(<SayMyName/>);


      expect(screen.getByText(textToFind,{exact:false})).toBeInTheDocument()
})
})