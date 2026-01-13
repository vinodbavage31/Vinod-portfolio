import { Award, ExternalLink, Calendar, Building2, Hash } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const certifications = [
  {
    name: "Certified Data Scientist",
    organization: "FutureSkills Prime",
    issuedDate: "December 2025",
    credentialId: "FSP/2025/12/10253057",
    url: "https://fsp-assessment-certificates.s3.ap-southeast-1.amazonaws.com/%27/s3/buckets/fsp-assessment-certificates%27/Vinod%2BBavage_154800107.pdf.pdf",
  },
  {
    name: "Data Science Associate",
    organization: "IABAC",
    issuedDate: "December 2025",
    credentialId: "IAB1120177662",
    url: "https://www.iabac.org/verify-certificate",
  },
  {
    name: "Intern – Rubixe AI Solutions",
    organization: "Rubixe AI Solutions",
    issuedDate: "November 2025",
    credentialId: "RX1765363315",
    url: "https://s3uploadobject.s3.amazonaws.com/erp_webinar_certificate/erp_enroll_certificate/RX1765363315.pdf",
  },
];

const Certifications = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="certifications" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary">Verified Credentials</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Licenses & Certifications</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional certifications validating expertise in data science and AI technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className={`glass-card group hover:scale-[1.02] transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  {/* Badge Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 neon-border">
                    <Award className="w-8 h-8 text-primary" />
                  </div>

                  {/* Certification Name */}
                  <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {cert.name}
                  </h3>

                  {/* Details */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Building2 className="w-4 h-4 text-primary/70" />
                      <span className="text-sm">{cert.organization}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Calendar className="w-4 h-4 text-primary/70" />
                      <span className="text-sm">Issued: {cert.issuedDate}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Hash className="w-4 h-4 text-primary/70" />
                      <span className="text-sm font-mono text-xs">{cert.credentialId}</span>
                    </div>
                  </div>

                  {/* View Button */}
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground font-semibold group/btn"
                  >
                    <a href={cert.url} target="_blank" rel="noopener noreferrer">
                      <span>View Certificate</span>
                      <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
