import BasePage, { Contexts } from "./basePage";
import HttpRequest from "./httpRequestPage";

const _axiosAction = new HttpRequest();
const _basePage = new BasePage();


export default class BoardPage{

    public async getBoardID(id:string) : Promise<string>{
        const context = _basePage.getUrlContext(Contexts.boards);
        const authParams = _basePage.getAuthParams();
        const resp = await _axiosAction.axiosGet(`${context}/${id}?${authParams}`)
        return resp.data.id;
    }

}