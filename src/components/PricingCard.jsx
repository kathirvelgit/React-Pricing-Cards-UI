

const PricingCard = ({plan}) => {
  return (
    <div className="card">
          <h4>{plan.title}</h4>
          <h2>{plan.price}</h2>

          <ul>
              {
                  plan.features.map((feature) => (
                      <li className={feature.available ? "black" : "grey"}><i className={`fa-solid ${feature.available ? "fa-check" : "fa-x"}`}></i>{feature.text }</li>
                  ))
              }

          </ul>


          <button className="btn">BUTTON</button>
          
    </div>
      

      
  )
}

export default PricingCard
