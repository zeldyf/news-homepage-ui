import Story from "./Story"
import "./stories.css"


export default function Stories() {
    return (
        <section className="stories">
            <Story
                num={"01"} img={require("./images/image-retro-pcs.jpg")}
                title={"Reviving Retro PCs"}
                subtitle={"What happens when old PCs are given a modern upgrade?"}
            />
            <Story
                num={"02"} img={require("./images/image-top-laptops.jpg")}
                title={"Top 10 Laptops of 2022"}
                subtitle={"Our best picks for various needs and budgets."}
            />
            <Story
                num={"03"} img={require("./images/image-gaming-growth.jpg")}
                title={"The Growth of Gaming"}
                subtitle={"How the pandemic has sparked fresh opportunities."}
            />
        </section>
    )
}