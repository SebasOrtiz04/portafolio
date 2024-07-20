
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import {useSelector, useDispatch} from 'react-redux'; 
import { CerrarAlerta } from '@/redux/actions/AlertaAction';

export const RootAlert = () => {

    const dispatch = useDispatch();
    const {alerta} = useSelector(state => state.alerta)

  return (
      <Snackbar 
      open={alerta.open} 
      autoHideDuration={3000} 
      onClose={() => dispatch(CerrarAlerta())} 
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert
          severity={alerta.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {alerta.msg}
        </Alert>
      </Snackbar>
  );
}