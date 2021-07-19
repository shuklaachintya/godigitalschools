//import store from 'store';

class ApiClient { 
    private token!: string | null;
    private auth0Token!: string | null;

    public initialize = (token: string) => {
        this.token = token;
        //store.set('podiumuiengine.token', token);
      
    }


    public setToken = (auth0Token: string) => {
        this.auth0Token = auth0Token;
        //store.set('Auth0Token', auth0Token);
        sessionStorage.setItem('authToken', auth0Token);
       
    }




}
export default new ApiClient();