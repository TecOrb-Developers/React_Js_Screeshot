import html2canvas from 'html2canvas'; // install this html2canvas and import them 
import React, { useState } from 'react'

const Content = () => {
//************************* this function conver html content into a canvas you can simply download them**************************************************888 */
  const handleSubmit = async () => {
    let googleMapsView = document.getElementById("containerId");
    await html2canvas(googleMapsView, { useCORS: true }).then(async (canvas) => {
      var a = document.createElement("a")
      document.body.appendChild(a);
      a.href = canvas.toDataURL("image/png").replace("image/jpeg", "image/octet-stream")
      a.download = "content.jpeg" // here you can change the name of download file.
      a.click()
      document.body.removeChild(a)
    });
  }

  return (
    <div>
      <button type='button' onClick={handleSubmit}>Take screenshot</button>
      <p id='containerId'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem excepturi laboriosam reprehenderit soluta, quas a. Id aspernatur vero in qui tempore tempora quam, aperiam recusandae mollitia ut corrupti, quaerat magni neque numquam reprehenderit dolores excepturi, vitae nam fugit. Illo veniam, sunt eaque necessitatibus quas officia velit dolores iste. Atque molestias quaerat molestiae excepturi soluta animi, repellendus impedit incidunt nulla voluptatum labore ut voluptatibus commodi suscipit odit assumenda modi? Tempore aspernatur architecto porro totam unde. Id velit neque, molestiae dignissimos tempora recusandae, fugiat cumque est veniam eveniet blanditiis labore magni mollitia quam eaque minus atque. Perferendis non quaerat, vero similique blanditiis est, dolores at alias debitis odio odit. Accusamus rem ab, facilis mollitia deserunt hic, dolorem voluptates iste sapiente dignissimos minima dolorum, voluptatibus cum qui ipsam aut assumenda labore tempore doloremque ut suscipit. Adipisci mollitia neque pariatur corrupti assumenda quisquam laborum eveniet aliquam. Accusantium expedita eos omnis at esse dolore atque fugiat aliquam, autem voluptatibus tempore fugit excepturi minima consectetur unde delectus deleniti reprehenderit sed quibusdam vel ipsum sapiente. Placeat animi nulla eum minus, voluptas voluptatum dignissimos ipsam error architecto ad quam ut, tempore veniam. Est inventore dolor vero accusantium, eveniet voluptatibus. Reiciendis, iste repudiandae ex illo, voluptatibus illum, cum esse unde ducimus aliquid nisi. Voluptatibus omnis alias numquam enim dolor a earum fuga nesciunt blanditiis. Voluptatem nihil dolor assumenda maxime obcaecati unde a quidem! Iusto, labore hic, magnam, saepe architecto ipsum qui laudantium voluptatibus reiciendis sed autem repellat ipsam totam ad iure necessitatibus impedit amet? Inventore rem temporibus doloremque obcaecati error sapiente dicta voluptatibus mollitia ducimus ipsam, soluta nisi pariatur delectus amet. Nam mollitia aut officia dolor autem, optio exercitationem odit dolorem earum temporibus labore id, praesentium nisi, natus itaque quod doloremque eius. Veritatis voluptatibus, doloribus est repellendus id similique aperiam voluptate voluptatum vitae ut repudiandae dicta excepturi sed. Veritatis itaque natus molestiae sapiente officiis ipsum suscipit excepturi iure quia nesciunt nam neque blanditiis sunt harum enim alias hic cumque totam minus, adipisci optio! Fugiat blanditiis dolore fuga, non esse autem repudiandae architecto eum fugit quasi officia dicta doloribus aut provident velit, modi quod? Saepe labore illo voluptas totam quos.</p>
    </div>
  )
}

export default Content