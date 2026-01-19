import styles from '../cssExamples.module.css'

type CssPostionProps = {
  title: string
  description: string
  containerStyle?: string
  box1Style: string
  box2Style: string
  box3Style: string
  showExtraText?: boolean
}

export default function CssPosition({
  title,
  description,
  containerStyle = '',
  box1Style,
  box2Style,
  box3Style,
  showExtraText = false,
}: CssPostionProps) {
  return (
    <div className="component-outline">
      <h3>{title}</h3>

      <small className={styles.small}>{description}</small>

      <div className={`${styles.container} ${containerStyle}`}>
        <div className={box1Style}>Box 1</div>
        <div className={box2Style}>Box 2</div>
        <div className={box3Style}>Box 3</div>
      </div>

      {showExtraText && (
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit id
          iusto commodi quas quaerat vitae consequuntur dignissimos architecto
          provident libero sint, culpa, reiciendis doloribus in perferendis vel!
          Fugit, nesciunt magni obcaecati reiciendis asperiores qui ratione
          sapiente magnam nulla, ducimus velit amet repudiandae perferendis modi
          aliquid placeat aspernatur. Adipisci aliquam possimus vel deleniti
          incidunt, consequatur ullam dolorem error labore explicabo enim iste,
          fugiat quaerat quo perferendis distinctio alias qui ducimus
          accusantium! Natus, voluptatum optio? Eligendi vel praesentium tenetur
          obcaecati eos sequi? Commodi, quas. Ipsum nam enim dicta consequatur.
          Repudiandae perspiciatis numquam vitae odit non deserunt molestiae quo
          quasi officia delectus accusamus optio placeat, nisi accusantium
          blanditiis omnis aut facilis nulla natus aspernatur illum itaque
          obcaecati, qui reiciendis. Voluptatem tempore, voluptatum
          reprehenderit inventore iure vero veritatis aliquam, quaerat enim sunt
          repellat illum perferendis reiciendis. Aliquam, rem? Enim unde tenetur
          provident placeat necessitatibus molestiae laboriosam magni ad. Quia
          necessitatibus soluta assumenda nihil, numquam repudiandae. Iusto quo
          nobis sit error delectus odio similique accusamus explicabo velit
          distinctio, neque blanditiis, nam, exercitationem ipsa nemo
          architecto. Repellendus at nesciunt magni maiores fuga excepturi in
          perspiciatis eaque cum dolorum odio, expedita tenetur necessitatibus
          dolores eos. Molestias aliquid quaerat tempore illum earum.
          Voluptatibus, iste. Quod reiciendis perferendis atque quae minima
          deleniti doloremque voluptate vel facilis, natus reprehenderit,
          itaque, veniam debitis excepturi dolor odio obcaecati culpa aliquid?
          Laborum omnis est blanditiis earum error, id dolore provident eveniet
          quas fuga quod quisquam architecto, porro quasi nam saepe nesciunt
          consectetur debitis voluptas incidunt! Provident minima, ipsam libero
          voluptatem unde maiores at ab nisi, fugit necessitatibus et
          dignissimos magnam ullam, voluptates laboriosam ipsa iusto. Eum veniam
          suscipit praesentium molestiae necessitatibus? Neque eum ex dicta
          dolores, alias quae magni magnam illo culpa, quibusdam architecto
          earum atque consequatur incidunt deserunt numquam sunt fugiat,
          voluptatem laudantium eveniet. Facilis praesentium, alias dolorum
          necessitatibus distinctio voluptatum cum molestias atque earum
          voluptatem nobis illum dolores? Eaque corrupti aperiam voluptatum
          inventore cupiditate. Quaerat accusamus, corporis quisquam nemo odio
          facilis ducimus voluptatem minima, praesentium officiis, expedita
          pariatur. Veniam hic, pariatur magni similique iusto ipsa, velit
          mollitia eos perferendis nam delectus, laborum iste dolor? Ut quaerat,
          quisquam eum ullam error fugit harum, nostrum laborum accusamus, ipsa
          vitae ipsum aliquam maiores nobis unde libero necessitatibus ea vero
          rerum iste. Quos dignissimos recusandae earum quia, laboriosam
          pariatur dolores neque, officiis enim quidem tenetur nihil!
          Dignissimos, sunt id. Atque asperiores beatae omnis, explicabo
          laboriosam reprehenderit illum dolorum placeat excepturi temporibus
          sequi maxime odit similique. Neque earum voluptas unde expedita eius
          maiores ea, veritatis eum soluta quam reprehenderit fuga
          exercitationem, vitae nesciunt quae cupiditate? Modi maxime nisi
          voluptatum, assumenda doloribus illo animi tempore quasi similique
          numquam esse! Dolor nisi ad libero reprehenderit, porro aliquam labore
          numquam aliquid ipsa consequatur ducimus eaque eum? Neque quia illum
          quas cupiditate quis quam tenetur molestias. Repellat recusandae iste
          laborum temporibus, ullam obcaecati quae dolorum amet, delectus vel
          neque fuga, similique omnis eos fugit nisi aliquam voluptas reiciendis
          hic? Debitis veritatis optio dicta sed. Saepe sit mollitia vitae
          minima exercitationem nesciunt et odit eum enim est eos architecto
          doloremque, blanditiis perspiciatis, possimus placeat tempore quisquam
          aliquam. Odio nisi alias doloribus dolores culpa! Qui exercitationem
          sed sint magni sapiente minima. Doloribus velit nulla facere
          doloremque hic voluptas culpa sequi repellat, quae veniam, distinctio
          quasi rem officia odit blanditiis accusamus dolor. Hic aspernatur
          aliquam voluptatibus sit cupiditate excepturi pariatur repudiandae,
          earum dolorem odit fugiat assumenda vero dolore minima odio totam
          molestias magni ea doloribus doloremque, possimus facilis quo quis?
          Dolore fuga ipsa officia, sit, distinctio molestias non corrupti
          accusantium exercitationem quisquam voluptatum aliquam reprehenderit
          ex, vel nulla facere repellendus repellat! Minus id, quo ea iure
          dolorem sequi quaerat reiciendis quam totam voluptate, non recusandae
          accusantium eum. Porro qui iste facere quam modi sequi a ipsum
          pariatur libero nam temporibus blanditiis sed animi ab, veniam quaerat
          voluptates culpa voluptatibus. Deserunt molestiae quisquam saepe ab
          voluptatem ad, distinctio ipsam reiciendis exercitationem, expedita
          eaque hic perspiciatis. Itaque deserunt incidunt laudantium
          dignissimos consectetur. Ullam, reiciendis culpa ipsa accusantium
          expedita reprehenderit sunt obcaecati quis velit sed. Inventore animi
          a repellendus eaque voluptates quibusdam est numquam laudantium
          accusantium sit deleniti vel quaerat, omnis enim ex ratione. Vitae
          obcaecati, pariatur labore, laborum corporis, accusamus dolore nobis
          omnis voluptas nostrum mollitia. Libero similique minima placeat non
          tempora pariatur provident nesciunt voluptatem unde cum. Id vel sint
          repudiandae ipsum quibusdam corrupti ut. Corporis provident incidunt
          harum debitis, pariatur neque, reiciendis, repellat mollitia eius
          possimus nostrum. Possimus dolorem quisquam atque necessitatibus
          laudantium id delectus aliquam excepturi. Quaerat quisquam officiis
          dolore vel libero, inventore asperiores molestiae iste, enim veniam
          consequatur! Ut, odit! Amet, incidunt earum dolore fuga eveniet rerum
          aperiam quis reiciendis natus molestiae, exercitationem vel. Excepturi
          assumenda deleniti doloremque iste error itaque voluptate consectetur
          ut repellat commodi est debitis provident eveniet neque optio,
          blanditiis adipisci. Deleniti eos suscipit illo, animi porro ad velit
          molestias dolore corrupti ea at sed voluptatum exercitationem
          blanditiis, eum eligendi esse nostrum corporis quibusdam laboriosam
          architecto quos fuga harum. Unde explicabo deleniti vero, itaque
          inventore quo possimus incidunt porro distinctio nihil sint, vel,
          quidem magnam error magni repellendus fugit corrupti quas. Id natus
          pariatur eum praesentium, magnam culpa. Corrupti tenetur cupiditate
          dolorum incidunt ad fugiat molestiae odit, laboriosam aut delectus
          deserunt amet unde, nihil, tempora ex impedit eum eaque. Qui pariatur
          quibusdam dolores aperiam, quas velit quisquam exercitationem odio
          dicta nostrum iusto aspernatur temporibus ipsa in eius! Quia, possimus
          ratione praesentium rerum cupiditate enim. Porro veritatis quos nisi
          sapiente debitis expedita eveniet facere explicabo molestiae commodi
          facilis dolor quae, natus quaerat incidunt eos earum, temporibus
          exercitationem. Consequuntur quibusdam ratione vitae sequi eligendi
          eaque nemo, ipsam deserunt cum sapiente sunt aperiam corporis culpa
        </p>
      )}
    </div>
  )
}
