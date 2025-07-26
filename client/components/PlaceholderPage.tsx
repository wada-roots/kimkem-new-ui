interface PlaceholderPageProps {
  title: string;
  description: string;
  comingSoon?: boolean;
}

const PlaceholderPage = ({ title, description, comingSoon = true }: PlaceholderPageProps) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center px-4">
        <div className="mb-8">
          <div className="w-20 h-20 bg-safari-orange rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-white font-bold text-2xl">KS</span>
          </div>
          <h1 className="text-4xl font-bold text-safari-brown mb-4">{title}</h1>
          <p className="text-xl text-gray-600 mb-6">{description}</p>
          {comingSoon && (
            <div className="bg-safari-beige rounded-lg p-6 mb-6">
              <h2 className="text-2xl font-semibold text-safari-brown mb-2">Coming Soon!</h2>
              <p className="text-gray-600">
                We're working hard to bring you this page with amazing content. 
                In the meantime, feel free to explore our safaris or contact us for more information.
              </p>
            </div>
          )}
        </div>
        
        <div className="space-y-4">
          <p className="text-gray-600">
            Want to learn more about this section? Contact us and we'll be happy to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-safari-green hover:bg-safari-green/90 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Contact Us
            </button>
            <button 
              onClick={() => window.history.back()}
              className="border border-safari-green text-safari-green hover:bg-safari-green hover:text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceholderPage;
