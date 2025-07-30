import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LaptopMinimal } from "lucide-react";
import { toast } from "sonner";
import { createPost, getDashboard } from "@/connecting";
import Logout from "@/components/logout";
import { useSelector } from "react-redux";
import Image from "@/components/image.png";

export default function Dashboard() {
  const role = useSelector((state: any) => state.auth.userData.role);
  const [jobPost, setJobPost] = useState({
    title: "",
    content: "",
    wantedLocation: "",
    wantedDate: "",
  });

  const [data, setData] = useState<{ email: string; name: string; bio: string } | null>();

  useEffect(() => {
    const fetchDetails = async () => {
      await getDashboard()
        .then((response) => {
          setData(response.data);
        })
        .catch(() => {
          toast.error("Failed to fetch dashboard data.");
        });
    };
    fetchDetails();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createPost(jobPost)
        .then(() => {
          toast.success("Job posted successfully!");
        })
        .catch(() => {
          toast.error("Failed to post job. Please try again.");
        });

      setJobPost({
        title: "",
        content: "",
        wantedLocation: "",
        wantedDate: "",
      });
    } catch (error) {
      toast.error("Failed to post job. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-slate-100 to-blue-50 text-slate-800">
      <nav className="border-b bg-white/70 backdrop-blur shadow-sm">
        <div className="flex h-16 items-center px-6">
          <div className="flex items-center space-x-2 text-indigo-600">
            <LaptopMinimal className="h-6 w-6" />
            <span className="text-xl font-bold">JOB HUB</span>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <Link to="/jobs">
              <Button variant="ghost" className="text-indigo-600 hover:bg-indigo-100">
                Browse Jobs
              </Button>
            </Link>
            <Logout />
          </div>
        </div>
      </nav>

      <main className="px-6 py-10">
        <div className="">
          {/* Profile Card */}
          <div className="space-y-6">
            <Card className="shadow-md border-indigo-100 rounded-xl bg-white">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <img
                    src={Image}
                    alt="Profile"
                    className="w-28 h-28 rounded-full object-cover mb-3 shadow"
                  />
                  <h2 className="text-xl font-semibold text-indigo-700">
                    {data?.name}
                  </h2>
                  <p className="text-sm text-slate-500">{data?.email}</p>
                  <p className="mt-3 text-slate-600 text-sm italic">{data?.bio}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Job Form */}
          <div className="space-y-6">
            {role !== "worker" ? (
              <Card className="shadow-md border-blue-100 rounded-xl bg-white">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6 text-blue-700">
                    Post a New Job
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="title" className="text-slate-700">
                        Job Title
                      </Label>
                      <Input
                        id="title"
                        className="mt-1"
                        value={jobPost.title}
                        onChange={(e) =>
                          setJobPost({ ...jobPost, title: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="content" className="text-slate-700">
                        Job Description
                      </Label>
                      <Textarea
                        id="content"
                        className="mt-1"
                        value={jobPost.content}
                        onChange={(e) =>
                          setJobPost({ ...jobPost, content: e.target.value })
                        }
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="location" className="text-slate-700">
                        Location
                      </Label>
                      <Input
                        id="location"
                        className="mt-1"
                        value={jobPost.wantedLocation}
                        onChange={(e) =>
                          setJobPost({
                            ...jobPost,
                            wantedLocation: e.target.value,
                          })
                        }
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="date" className="text-slate-700">
                        Application Deadline
                      </Label>
                      <Input
                        id="date"
                        type="date"
                        className="mt-1"
                        value={jobPost.wantedDate}
                        onChange={(e) =>
                          setJobPost({ ...jobPost, wantedDate: e.target.value })
                        }
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                    >
                      Post Job
                    </Button>
                  </form>
                </CardContent>
              </Card>
            ) : (
              <div />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
