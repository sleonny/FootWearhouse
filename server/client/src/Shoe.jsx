import React from 'react';
import Handlebars from 'handlebars/dist/handlebars';

const hbr = `
<h2>{{name}}</h2>
<p>Description: {{description}}</p>
<p>This listing is for a size {{size}} and is priced at {{price}}.
`;

const template = Handlebars.compile(hbr);

const Shoe = ({ shoe }) => {
    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: template(shoe) }} />
        </div>
    )
};

export default Shoe;
