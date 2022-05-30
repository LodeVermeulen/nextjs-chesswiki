import styles from '../styles/collapseList.module.css'

// also called: multi-level accordion menu
export default function CollapsibleList(props) {
  const list = [
    {
      name: 'Rúy Lopez', type: 'parent', children: [
        { name: 'mainline', type: 'child' },
        { name: 'sideline', type: 'child' },
        { name: 'sideline', type: 'child' },
        { name: 'sideline', type: 'child' },
        { name: 'sideline', type: 'child' },
      ]
    },
    {
      name: 'Giucci Piano', type: 'parent', children: [
        { name: 'mainline', type: 'child' },
        {
          name: 'second mainline', type: 'parent', children: [
            { name: 'sideline 1', type: 'child' },
            { name: 'sideline 2', type: 'child' },
            { name: 'sideline 3', type: 'child' },
          ]
        },
        { name: 'sideline 1', type: 'child' },
        { name: 'sideline 2', type: 'child' },
        { name: 'sideline 3', type: 'child' },
        { name: 'sideline 4', type: 'child' },
      ]
    }
  ]

  return (
    <>
      {renderParent(list[0])}
      {renderParent(list[1])}
    </>
  )
}

function renderParent(parent) {
  const renderedChildren = parent.children.map((item, index) => {
    if (item.type === 'child') {
      return <li key={parent.name + ' child ' + index}><div>{item.name + ', ' + parent.name + ' child ' + index}</div></li>
    } else {
      // another parent
      return renderParent(item)
    }
  })
  return (
    <li>
      <details key={'collapsible list parent' + parent.name}>
        <summary className={styles.parentWrapper}><h3 style={{ margin: '0' }}>{parent.name}</h3></summary>
        <div className={styles.childrenWrapper}><ul style={{ margin: '0' }}>{renderedChildren}</ul></div>
      </details>
    </li>
  )
}

// function renderParent(parent) {
//   const renderedChildren = parent.children.map((item, index) => {
//     if (item.type === 'child') {
//       return <li key={parent.name + ' child ' + index}><div>{item.name + ', ' + parent.name + ' child ' + index}</div></li>
//     } else {
//       // another parent
//       return renderParent(item)
//     }
//   })
//   return (
//     <li key={'collapsible list parent' + parent.name}>
//       <div className={styles.parentWrapper} onClick={toggleChildren}><h3 style={{ margin: '0' }}>{parent.name}</h3></div>
//       <div className={styles.childrenWrapper}><ul style={{ margin: '0' }}>{renderedChildren}</ul></div>
//     </li>
//   )
// }

// an entire thread about collapse animations: https://stackoverflow.com/questions/3508605/how-can-i-transition-height-0-to-height-auto-using-css
function toggleChildren(e) {
  const parentElement = e.currentTarget
  const childrenWrapper = parentElement.nextElementSibling // sibling because the children wrapper is a sibling
  // childrenWrapper.className = styles.collapsedChildrenWrapper
  // childrenWrapper.classList.toggle(styles.collapsedChildrenWrapper)
  if (!childrenWrapper.style.height || childrenWrapper.style.height == '0px') {
    console.log(childrenWrapper.offsetHeight)
    childrenWrapper.style.height = childrenWrapper.scrollHeight + 'px'
    // Array.prototype.reduce.call(childrenWrapper.childNodes, function (p, c) {
    //   console.log(childrenWrapper)
    //   return p + (c.offsetHeight || 0);
    // }, 0) + 'px';
  } else {
    childrenWrapper.style.height = '0px';
  }

  // var panel = childrenWrapper;
  // if (panel.style.maxHeight) {
  //   panel.style.maxHeight = null;
  // } else {
  //   panel.style.maxHeight = panel.scrollHeight + "px";
  // }
}


// TEMPLATE:
// <>
//   <div>
//     Listname
//     <ul>
//       <li>
//         <div>Parent: Ruy</div>
//         <div>
//           <ul>
//             <li><div>Mainline</div></li>
//             <li><div>sideline 1</div></li>
//             <li><div>sideline 2</div></li>
//             <li><div>sideline 3</div></li>
//             <li><div>sideline 4</div></li>
//           </ul>
//         </div>
//       </li>
//       <li>
//         <div>Parent: Giucci Piano</div>
//         <div>
//           <ul>
//             <li><div>Mainline</div></li>
//             <li>
//               <div>Parent: second mainline</div>
//               <div>
//                 <ul>
//                   <li><div>sideline 1</div></li>
//                   <li><div>sideline 2</div></li>
//                   <li><div>sideline 3</div></li>
//                 </ul>
//               </div>
//             </li>
//             <li><div>sideline 1</div></li>
//             <li><div>sideline 2</div></li>
//             <li><div>sideline 3</div></li>
//             <li><div>sideline 4</div></li>
//           </ul>
//         </div>
//       </li>
//     </ul>
//   </div>
// </>

//details, summary template:
// <>
// <div>
//   Listname
//   <details>
//     <summary><div>Parent: Ruy</div></summary>
//     <div>
//       <ul>
//         <li><div>Mainline</div></li>
//         <li><div>sideline 1</div></li>
//         <li><div>sideline 2</div></li>
//         <li><div>sideline 3</div></li>
//         <li><div>sideline 4</div></li>
//       </ul>
//     </div>
//   </details>

//   <details>
//     <summary><div>Parent: Giucci Piano</div></summary>
//     <div>
//       <ul>
//         <li><div>Mainline</div></li>
//         <li>
//           <details>
//             <summary><div>Parent: second mainline</div></summary>
//             <div>
//               <ul>
//                 <li><div>sideline 1</div></li>
//                 <li><div>sideline 2</div></li>
//                 <li><div>sideline 3</div></li>
//               </ul>
//             </div>
//           </details>

//         </li>
//         <li><div>sideline 1</div></li>
//         <li><div>sideline 2</div></li>
//         <li><div>sideline 3</div></li>
//         <li><div>sideline 4</div></li>
//       </ul>
//     </div>
//   </details>
// </div>
// </>