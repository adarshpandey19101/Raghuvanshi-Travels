import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const whatsappNumber = "918700418360";
  
  // Catch all /packages/* (but not /packages itself)
  if (path.startsWith('/packages/') && path !== '/packages') {
    const pkg = path.replace('/packages/', '');
    const pkgName = pkg.split('/').pop()?.replace(/-/g, ' ') || 'tour';
    const message = `Hello Raghuvanshi Travels, I want to know more about the ${pkgName} package.`;
    return NextResponse.redirect(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`);
  }
  
  // Catch all /blog/* (but not /blog itself)
  if (path.startsWith('/blog/') && path !== '/blog') {
    return NextResponse.redirect(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello Raghuvanshi Travels, I want to know more about your services.")}`);
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/packages/:path+', '/blog/:path+'],
}
