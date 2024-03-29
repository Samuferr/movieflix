import { request } from 'https';
import {useForm} from 'react-hook-form'
import { requestBackendLogin } from 'util/request';
import './styles.css';

type FormData = {
    username: string;
    password: string;
}

const Login = () => {
    
    const { register, handleSubmit } = useForm<FormData>();
    
    const onSubmit = (formData: FormData) => {
        requestBackendLogin(formData)
          .then(response => {
            console.log('SUCESSO', response);
          })
          .catch(error => {
            console.log('ERRO', error);
          })
      };


    return(
        <div className="base-card card-container auth-card">
            <h1>LOGIN</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <input
                    {...register("username")}
                    type="text"
                    className="form-control base-input"
                    placeholder="Email"
                    name="username"
                    />
                </div>
                <div className="mb-2">
                    <input
                    {...register("password")}
                    type="password"
                    className="form-control base-input"
                    placeholder="Password"
                    name="password"
                    />
                </div>

                <div className="login-submit">
                    <button>Fazer Login</button>
                </div>
            </form>

        </div>
    );
}

export default Login;