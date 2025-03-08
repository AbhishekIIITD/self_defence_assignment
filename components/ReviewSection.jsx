// ReviewsSection.jsx
"use client";
import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { CgProfile } from "react-icons/cg";

const defenseAcademyReviews = [
    {
      id: 1,
      name: "James Wilson",
      location: "Austin, TX",
      rating: 5,
      text: "The tactical training at Phoenix Defense Academy changed my perspective completely. The instructors are all veterans with real-world experience, and it shows in their teaching methods. Worth every penny for the skills I gained.",
      date: "February 12, 2025",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: 2,
      name: "Sarah Martinez",
      location: "Colorado Springs, CO",
      rating: 4,
      text: "As a law enforcement professional, I was looking for advanced training beyond standard department offerings. Their defensive tactics course was excellent, though the class size was larger than advertised.",
      date: "January 28, 2025",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: 3,
      name: "Michael Thompson",
      location: "Virginia Beach, VA",
      rating: 5,
      text: "Coming from a military background, I had high expectations. The academy exceeded them. Their crisis response simulation was the most realistic training environment I've experienced outside of official military exercises.",
      date: "March 4, 2025",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: 4,
      name: "Emily Chen",
      location: "Seattle, WA",
      rating: 3,
      text: "The firearms training was top-notch with excellent range facilities, but the classroom portions could have been more engaging. Still, I left with improved skills and greater confidence.",
      date: "February 22, 2025",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: 5,
      name: "Robert Johnson",
      location: "Atlanta, GA",
      rating: 5,
      text: "As a private security contractor, I needed specialized training for overseas assignments. Their international security operations course was comprehensive and the scenario-based training was incredibly realistic.",
      date: "January 15, 2025",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: 6,
      name: "Lisa Patel",
      location: "Phoenix, AZ",
      rating: 4,
      text: "I took their civilian self-defense course, and it was eye-opening. The instructors focus on practical techniques that work under stress, not flashy moves. Small class size ensured personal attention.",
      date: "March 1, 2025",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: 7,
      name: "David Williams",
      location: "Dallas, TX",
      rating: 5,
      text: "The executive protection program is intense but extremely valuable. The instructors bring decades of experience protecting high-profile clients. Their attention to detail in teaching threat assessment is unmatched.",
      date: "February 8, 2025",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: 8,
      name: "Olivia Rodriguez",
      location: "Miami, FL",
      rating: 4,
      text: "As a woman in a male-dominated field, I appreciated how the instructors created an inclusive environment while maintaining high standards. Their tactical medical training was particularly valuable.",
      date: "January 30, 2025",
      avatar: "/api/placeholder/40/40"
    },
    {
      id: 9,
      name: "Thomas Brown",
      location: "Las Vegas, NV",
      rating: 3,
      text: "The facilities are state-of-the-art and the instructors clearly know their stuff. However, the advanced course assumed more prior knowledge than advertised. Still learned a lot, but was playing catch-up initially.",
      date: "February 17, 2025",
      avatar: "/api/placeholder/40/40"
    }
  ];

const ReviewsSection = () => {

  const [currentPage, setCurrentPage] = useState(0);
  const reviews = defenseAcademyReviews;
  const reviewsPerPage = 3;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  
  const displayedReviews = reviews.slice(
    currentPage * reviewsPerPage, 
    (currentPage + 1) * reviewsPerPage
  );
  
  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };
  
  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };
  
  // Function to render stars based on rating
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };
  
  
  return (
    <section className="py-12 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. See what our customers have to say about their experience.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Reviews Container */}
          <div className="grid md:grid-cols-3 gap-6">
            {displayedReviews.map((review, index) => (
              <div 
                key={review.id || index} 
                className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <CgProfile className="w-full h-full text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-black">{review.name}</h4>
                    <p className="text-sm text-gray-500">{review.location}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {renderStars(review.rating)}
                </div>
                
                <p className="text-gray-700 mb-3">{review.text}</p>
                
                <p className="text-sm text-gray-500 italic">
                  {review.date}
                </p>
              </div>
            ))}
          </div>
          
          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8">
              <button 
                onClick={prevPage}
                className="mx-2 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors duration-200"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              
              <div className="flex items-center px-4">
                <p className="text-sm text-gray-600">
                  {currentPage + 1} of {totalPages}
                </p>
              </div>
              
              <button 
                onClick={nextPage}
                className="mx-2 p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors duration-200"
                aria-label="Next page"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;