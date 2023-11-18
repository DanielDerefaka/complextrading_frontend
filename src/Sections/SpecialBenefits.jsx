import SpecialBenefitsCard from "../Components/SpecialBenefitsCard"
import { specialBenefits } from "../Constants"

const SpecialBenefits = () => {
  return (
    <section className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-10 px-7 py-8">
        {specialBenefits.map((data) => {return (
            <SpecialBenefitsCard key={data.label} data={data} />
        )})}
    </section>
  )
}

export default SpecialBenefits