/*import BasePage, { Contexts } from '../../common/basePage'
import HttpRequest from '../../common/httpRequestPage';*/

import BasePage, {Contexts} from 'backend-repo-core/src/basePage';
import HttpRequestPage from 'backend-repo-core/src/httpRequestPage';
import BoardPage from '../../common/boardPage';


const _basePage = new BasePage();
const _axiosAction = new HttpRequestPage();
const _boardPage = new BoardPage();

describe('Trello suite', () => {

    const authParams = _basePage.getAuthParams();
    
    /*test('[Get] Board', async () => {
        const context = _basePage.getUrlContext(Contexts.boards);
        // '/' continue with the url needed to invoke the API 
        // '?' start of parameters
        const res = _axiosAction.axiosGet(`${context}/${Variables.idBoard}?${authParams}`)
            .then(function(res){

                console.log(res.data);
                console.log(res.data.id);

                return res.data.name;

            }).catch(function (error) {
                console.error(error);
            });

        expect(await res).toEqual('My first board')
        
    });*/

    test('[Post] Create a new List', async () => {
        const context = _basePage.getUrlContext(Contexts.lists);

        // Id board 'My first Board'
        const idBoard = await _boardPage.getBoardID('7VaH1jGZ');

        // Get random name
        const randomName = _basePage.getRandomName();

        const res = await _axiosAction.axiosPost(`${context}?name=${randomName}&idBoard=${idBoard}&${authParams}`)

        expect(res.status).toBe(200);
        
    });

});