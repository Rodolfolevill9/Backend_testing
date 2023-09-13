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

    test('TC-001 [Post] Create a new List', async () => {
        const listContext = _basePage.getUrlContext(Contexts.lists);
        const boardContext = _basePage.getUrlContext(Contexts.boards);

        // Id board 'My first Board'
        const idBoard = await _boardPage.getBoardID('7VaH1jGZ');
        console.log(idBoard)

        // Get random name
        const randomName = _basePage.getRandomName();

        const res = await _axiosAction.axiosPost(`${listContext}?name=${randomName}&idBoard=${idBoard}&${authParams}`)

        expect(res.status).toBe(200);

        // GET all board created 
        const getlistCreated = await _axiosAction.axiosGet(`${boardContext}/7VaH1jGZ/lists/open?${authParams}`)
        const nameBoardCreated = getlistCreated.data[0].name;
        console.log(getlistCreated.data[0].name)
        expect(nameBoardCreated).toBe(randomName);
    });

    test('TC-002 [Post] Create a new List', async () => {
        const listContext = _basePage.getUrlContext(Contexts.lists);
        const boardContext = _basePage.getUrlContext(Contexts.boards);

        // Id board 'My first Board'
        const idBoard = await _boardPage.getBoardID('7VaH1jGZ');
        console.log(idBoard)

        // Get random name
        const randomName = _basePage.getRandomName();

        const res = await _axiosAction.axiosPost(`${listContext}?name=${randomName}&idBoard=${idBoard}&${authParams}`)

        expect(res.status).toBe(400);

        // GET all board created 
        const getlistCreated = await _axiosAction.axiosGet(`${boardContext}/7VaH1jGZ/lists/open?${authParams}`)
        const nameBoardCreated = getlistCreated.data[0].name;
        console.log(getlistCreated.data[0].name)
        expect(nameBoardCreated).toBe(randomName);
    });

    test('TC-003 [Post] Create a new List', async () => {
        const listContext = _basePage.getUrlContext(Contexts.lists);
        const boardContext = _basePage.getUrlContext(Contexts.boards);

        // Id board 'My first Board'
        const idBoard = await _boardPage.getBoardID('7VaH1jGZ');
        console.log(idBoard)

        // Get random name
        const randomName = _basePage.getRandomName();

        const res = await _axiosAction.axiosPost(`${listContext}?name=${randomName}&idBoard=${idBoard}&${authParams}`)

        expect(res.status).toBe(200);

        // GET all board created 
        const getlistCreated = await _axiosAction.axiosGet(`${boardContext}/7VaH1jGZ/lists/open?${authParams}`)
        const nameBoardCreated = getlistCreated.data[0].name;
        console.log(getlistCreated.data[0].name)
        expect(nameBoardCreated).toBe(randomName);
    });

});