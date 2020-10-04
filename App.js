import React, {useContext} from 'react';
import { ThemeProvider} from './theme/theme-context';

import Card from './components/Card';
const App = () => {
  return (
    <ThemeProvider>
         <Card />
    </ThemeProvider>
  );
};

export default App;
