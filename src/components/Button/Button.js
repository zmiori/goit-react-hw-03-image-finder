import { Component } from 'react';
// import s from './Button.css';

class Button extends Component {
  // normalizedTitle = t => {
  //   return t[0].toUpperCase() + t.slice(1);
  // };
  // render() {
  //   const { contacts, onDeleteContact } = this.props;
  //   return (
  //     <ul className={s.list}>
  //       {contacts.length > 0
  //         ? contacts.map(contact => (
  //             <li
  //               className={s.contactItem}
  //               key={contact.id}
  //               name={contact.name}
  //             >
  //               <span className={s.contactData}>
  //                 {this.normalizedTitle(contact.name)} : {contact.number}
  //               </span>
  //               <button
  //                 type="button"
  //                 className="deleteBtn btn btn-outline-dark"
  //                 onClick={() => onDeleteContact(contact.id)}
  //               >
  //                 Удалить
  //               </button>
  //             </li>
  //           ))
  //         : 'No contacts added yet.'}
  //     </ul>
  //   );
  // }
}

export default Button;