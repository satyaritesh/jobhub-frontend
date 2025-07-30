import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CalendarIcon,
  LaptopMinimal,
  MapPinIcon,
} from "lucide-react";
import { applyForPost, getAllPosts } from "@/connecting";
import Logout from "@/components/logout";

interface JobPost {
  _id: string;
  title: string;
  content: string;
  wantedLocation: string;
  wantedDate: string;
}

export default function MainPage() {
  const [posts, setPosts] = useState<JobPost[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      await getAllPosts()
        .then((response) => {
          setPosts(response.data);
        })
        .catch(() => {
          console.error("Failed to fetch posts.");
        });
    };
    fetchPosts();
  }, []);

  const apply = async (postId: string) => {
    try {
      await applyForPost(postId);
      alert("Application submitted successfully!");
    } catch (error) {
      console.error("Failed to apply for post:", error);
      alert(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-slate-100 to-blue-50 text-slate-800">
      {/* Navbar */}
      <nav className="border-b bg-white/70 backdrop-blur shadow-sm">
        <div className="flex h-16 items-center px-6">
          <div className="flex items-center space-x-2 text-indigo-600">
            <LaptopMinimal className="h-6 w-6" />
            <span className="text-xl font-bold">JOB HUB</span>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <Link to="/dashboard">
              <Button variant="ghost" className="text-indigo-600 hover:bg-indigo-100">
                Dashboard
              </Button>
            </Link>
            <Logout />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="px-6 py-10">
        <h1 className="text-3xl font-bold mb-8 text-blue-800">Available Jobs</h1>

        <div className="grid gap-6 lg:grid-cols-2">
          {posts?.map((post) => (
            <Card key={post._id} className="rounded-xl shadow-md border-blue-100 bg-white">
              <CardHeader>
                <CardTitle className="text-xl text-indigo-700">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4 line-clamp-3">{post.content}</p>
                <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                  <div className="flex items-center">
                    <MapPinIcon className="h-4 w-4 mr-2 text-blue-500" />
                    {post.wantedLocation}
                  </div>
                  <div className="flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-2 text-blue-500" />
                    {new Date(post.wantedDate).toLocaleDateString()}
                  </div>
                </div>
                <div className="mt-5">
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                    onClick={() => apply(post._id)}
                  >
                    Apply Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
