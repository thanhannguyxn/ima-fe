import { useEffect, useState } from 'react';
import Header from '../components/header/Header';

const ReportsPage = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching reports from an API
    const fetchReports = async () => {
      try {
        // Replace with actual API call
        const response = await fetch('/api/reports');
        const data = await response.json();
        setReports(data);
      } catch (error) {
        console.error('Error fetching reports:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

  return (
    <>
      <Header />
      <div>
        {loading ? (
          <p>Loading reports...</p>
        ) : (
          <ul>
            {reports.map((report) => (
              <li key={report.id}>{report.title} - {report.date}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default ReportsPage;