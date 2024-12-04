import { DOMImplementation } from "@xmldom/xmldom";
export { Node, DOMParser, XMLSerializer } from "@xmldom/xmldom";
export const document = new DOMImplementation().createDocument(null, 'html', null);