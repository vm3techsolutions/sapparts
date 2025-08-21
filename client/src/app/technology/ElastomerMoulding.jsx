export default function ElastomerSection() {
  return (
    <section className="Section bg-white">
      {/* Section Title */}
      <div className="text-center  mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#FACC48]">
          Elastomer Moulding and Polymer Products
        </h2>
        <p className="Paragraph text-center mt-3">
          At SAP Parts, our in-house elastomer manufacturing shop provides us
          with a distinct advantage in producing highly reliable O-rings and
          T-rings for metal face seals. This integrated capability allows for
          complete control over the entire process, from material selection to
          the final product.
        </p>
      </div>

      {/* Grid Boxes */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto ">
        {/* Box 1 */}
        <div className="bg-[#0E509E] text-white p-8 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold text-[#FACC48]">
            Diverse Material Expertise
          </h3>
          <p className="mt-2 text-md leading-relaxed">
            We work with a wide range of high-performance rubber grades,
            including NBR, HNBR, NBR-LT, FKM, and Silicone, ensuring we can
            select the perfect material to meet your application&apos;s specific
            demands.
          </p>
        </div>

        {/* Box 2 */}
        <div className="bg-[#0E509E] text-white p-8 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold text-[#FACC48]">
            Application-Specific Development
          </h3>
          <p className="mt-2 text-md leading-relaxed">
            Our dedicated R&amp;D team develops and validates proprietary
            elastomer solutions tailored for the harsh conditions of off-highway
            applications.
          </p>
        </div>

        {/* Box 3 */}
        <div className="bg-[#0E509E] text-white p-8 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold text-[#FACC48]">
            Rigorous Validation
          </h3>
          <p className="mt-2 text-md leading-relaxed">
            Through advanced testing protocols that simulate real-world
            environments, we precisely characterize a polymer&apos;s performance
            against stresses like high-speed rotation and extreme temperatures.
          </p>
        </div>

        {/* Box 4 */}
        <div className="bg-[#0E509E] text-white p-8 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold text-[#FACC48]">
            Proven Reliability
          </h3>
          <p className="mt-2 text-md leading-relaxed">
            This meticulous, scientific approach guarantees that our elastomer
            components are not only perfectly matched to their metal
            counterparts but are also proven to provide predictable and durable
            sealing performance.
          </p>
        </div>
      </div>
    </section>
  );
}
