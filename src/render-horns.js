export default function renderHornItem(hornItem) {
    const html = /*html*/`
   
    <li class="horns-container">
        <div class="title">
            <p>${hornItem.title}</p>
        </div>
        <div class="picture-container">
            <img src="${hornItem.url}" alt="Uniwhal" >
        </div>
        <div class="horns-amount">
            <p>
            Horns: ${hornItem.horns}
            </p>
        </div>
    </li>
`;
    return html;
}