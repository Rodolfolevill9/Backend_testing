import BasePage, {Contexts} from 'backend-repo-core/src/basePage';
import HttpRequestPage from 'backend-repo-core/src/httpRequestPage';

const _axiosAction = new HttpRequestPage();
const _basePage = new BasePage();

export default class BoardPage{

    public async getBoardID(id:string) : Promise<string>{
        const context = _basePage.getUrlContext(Contexts.boards);
        const authParams = _basePage.getAuthParams();
        const resp = await _axiosAction.axiosGet(`${context}/${id}?${authParams}`)
        return resp.data.id;
    }

}