declare var global: any;
declare var require: (path: string) => any;
const NodeFetch = require("node-fetch");

(function (g) {

    // patch these globally for nodejs
    if (!g.Headers) {
        g.Headers = NodeFetch.Headers;
    }
    if (!g.Request) {
        g.Request = NodeFetch.Request;
    }
    if (!g.Response) {
        g.Response = NodeFetch.Response;
    }

})(global);


export { SPFetchClient } from "./net/spfetchclient";
export { AdalFetchClient, AADToken } from "./net/adalfetchclient";
