import React from "react";
import "./SingleFood.scss";
import food from "../../assets/food1.jpg";
import { BiFoodMenu } from "react-icons/bi";

const SingleFood = () => {
  return (
    <div className="single-food">
      <img src={food} alt="" />
      <h1>Burger | Price - $200</h1>
      <div className="ingredients">
        <h2>Ingredients</h2>
        <ol>
          <li>
            <BiFoodMenu />
            Bread
          </li>
          <li>
            <BiFoodMenu />
            Chicken
          </li>
          <li>
            <BiFoodMenu />
            Potato
          </li>
          <li>
            <BiFoodMenu />
            Tomato
          </li>
        </ol>
      </div>
      <div className="desc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ullam
        sunt velit autem dolores vitae illo repellat nihil cumque, dolorem
        aspernatur natus! Quia suscipit, iste unde cumque sequi blanditiis hic?
        Itaque fugiat repudiandae odio rerum, similique libero nam, consequatur
        maxime consectetur impedit perspiciatis accusamus quos quia fuga.
        Tempora iure officia voluptatibus cupiditate veniam quam, quisquam,
        eligendi autem aut placeat non! Quia delectus similique odio nulla quasi
        ducimus? Laborum porro voluptatem harum vitae sint, accusamus a ab ad?
        Unde, ipsam numquam nulla reprehenderit rerum, quod accusantium illum
        aspernatur harum amet quia. Aspernatur tempore natus porro veritatis
        doloribus! Non delectus error perspiciatis ut omnis harum doloremque quo
        ipsum nesciunt repellendus aliquam accusantium, dolorum totam voluptatem
        dolore ullam earum vitae natus provident obcaecati. Optio praesentium,
        necessitatibus, natus rem illo magnam quaerat, doloremque corrupti
        suscipit eum aspernatur? Non, porro doloribus saepe distinctio, at
        aliquid nulla adipisci voluptatum facilis praesentium quaerat. Atque
        libero quasi nihil? Ea ab velit laborum obcaecati officia praesentium
        sint ipsam soluta iste quod quos similique harum nemo incidunt
        consequuntur, nisi nobis ex optio. Accusamus dolorum incidunt vel eos
        omnis praesentium quis! Esse repellendus quis explicabo veritatis
        quaerat iste quisquam mollitia aut incidunt asperiores? Reiciendis dicta
        similique deserunt harum sit ab tempore quos rem ratione quo obcaecati,
        nobis sunt exercitationem ullam dolores! Veritatis voluptate magni
        molestias asperiores eius perspiciatis deserunt accusantium doloribus
        laudantium nobis, delectus aperiam nesciunt perferendis eligendi nam
        incidunt laboriosam nulla culpa dicta quidem. Quae, quod! Fugit,
        quisquam voluptatibus! Eligendi! Error illo quisquam quas placeat
        praesentium, amet expedita animi commodi! Voluptatum, fuga dolorum
        consequatur deleniti quas pariatur provident debitis molestiae tenetur
        libero velit esse sapiente deserunt molestias dolor non omnis. Tempora
        quae ab quisquam beatae nam at sed praesentium veniam. Sit dolore
        repellat eum eveniet possimus mollitia veritatis sint, delectus quos
        laboriosam sapiente adipisci placeat neque nemo totam maiores
        temporibus! Numquam perferendis distinctio modi error hic ipsum aut
        quaerat velit vel quod. Veniam, natus eum. Alias nostrum possimus
        mollitia! Quam sunt qui enim expedita odio? Neque ea ipsum nemo
        delectus. Perferendis hic dolores, omnis laboriosam ab assumenda amet
        corporis eaque similique est ad maxime, soluta deserunt quas minus quis
        reiciendis ipsa dolor, magni voluptatibus eos voluptatem alias! Esse,
        pariatur illo. Aperiam sed hic pariatur doloremque at! Nihil aliquid
        nobis saepe optio omnis quod quos blanditiis eos ad repellendus? Aliquid
        vero adipisci qui itaque velit sed, quos iste. Assumenda, fugit alias.
      </div>
    </div>
  );
};

export default SingleFood;
